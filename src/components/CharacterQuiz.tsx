"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { RotateCcw, Sparkles, Trophy } from "lucide-react";
import type { Character } from "@/lib/types";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeCharacter } from "@/lib/i18n/localize";
import { cn } from "@/lib/cn";

const ROUNDS = 5;

type QuizCharacter = Character;

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

function buildQuizPool(characters: Character[]): QuizCharacter[] {
  return characters.filter((c) => c.quote || c.description.length > 12);
}

function pickRound(pool: QuizCharacter[], used: Set<string>): QuizCharacter | null {
  const available = pool.filter((c) => !used.has(c.slug));
  if (available.length === 0) return null;
  return available[Math.floor(Math.random() * available.length)]!;
}

function pickOptions(correct: QuizCharacter, pool: QuizCharacter[]): QuizCharacter[] {
  const wrong = shuffle(pool.filter((c) => c.slug !== correct.slug)).slice(0, 3);
  return shuffle([correct, ...wrong]);
}

type Props = {
  characters: Character[];
  variant?: "c" | "a" | "b" | "d";
};

export function CharacterQuiz({ characters: raw, variant = "c" }: Props) {
  const locale = useLocale();
  const t = useT();
  const pool = useMemo(() => buildQuizPool(raw), [raw]);

  const [session, setSession] = useState(0);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [used, setUsed] = useState<Set<string>>(() => new Set());
  const [current, setCurrent] = useState<QuizCharacter | null>(null);
  const [options, setOptions] = useState<QuizCharacter[]>([]);
  const [picked, setPicked] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const didInit = useRef(false);

  const startRound = useCallback(
    (roundIndex: number, usedSlugs: Set<string>) => {
      const next = pickRound(pool, usedSlugs);
      if (!next || roundIndex >= ROUNDS) {
        setFinished(true);
        return;
      }
      setCurrent(next);
      setOptions(pickOptions(next, pool));
      setPicked(null);
      setUsed(new Set(usedSlugs).add(next.slug));
    },
    [pool],
  );

  const beginSession = useCallback(() => {
    setSession((s) => s + 1);
    setRound(0);
    setScore(0);
    setFinished(false);
    startRound(0, new Set());
  }, [startRound]);

  useEffect(() => {
    if (didInit.current || pool.length < 4) return;
    didInit.current = true;
    beginSession();
  }, [pool.length, beginSession]);

  if (pool.length < 4) return null;

  const cardClass =
    variant === "b"
      ? "rounded-3xl border-2 border-dashed border-wine/30 bg-blush/15"
      : "edit-card";

  const handlePick = (slug: string) => {
    if (picked || !current) return;
    setPicked(slug);
    const correct = slug === current.slug;
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      const nextRound = round + 1;
      setRound(nextRound);
      if (nextRound >= ROUNDS) {
        setFinished(true);
      } else {
        startRound(nextRound, used);
      }
    }, 900);
  };

  const resultKey =
    score === ROUNDS
      ? "perfect"
      : score >= ROUNDS - 1
        ? "great"
        : score >= ROUNDS / 2
          ? "good"
          : "tryAgain";

  return (
    <div className={cn(cardClass, "overflow-hidden p-6 sm:p-8")}>
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="kicker">{t("quiz.kicker")}</p>
          <h2 className="display mt-1 text-2xl text-wine-deep">{t("quiz.title")}</h2>
          <p className="mt-2 text-sm text-ink-soft">{t("quiz.subtitle")}</p>
        </div>
        <Sparkles className="shrink-0 text-gold" size={24} aria-hidden />
      </div>

      {finished ? (
        <div className="text-center">
          <Trophy className="mx-auto text-gold" size={40} aria-hidden />
          <p className="display mt-4 text-4xl text-wine-deep">
            {score} / {ROUNDS}
          </p>
          <p className="mt-3 text-ink-soft">{t(`quiz.result.${resultKey}`)}</p>
          <button
            type="button"
            onClick={beginSession}
            className="btn-primary mt-6 inline-flex items-center gap-2"
          >
            <RotateCcw size={16} />
            {t("quiz.playAgain")}
          </button>
        </div>
      ) : current ? (
        <>
          <p className="mb-2 text-xs text-ink-mute">
            {t("quiz.round", { current: round + 1, total: ROUNDS })}
          </p>
          <blockquote className="mb-6 rounded-xl bg-background-deep/50 px-5 py-4 text-center text-base italic leading-relaxed text-ink">
            {(() => {
              const c = localizeCharacter(current, locale);
              return c.quote
                ? `「${c.quote}」`
                : c.description.slice(0, 56) + (c.description.length > 56 ? "…" : "");
            })()}
          </blockquote>
          <ul className="grid gap-3 sm:grid-cols-2" key={`${session}-${round}`}>
            {options.map((opt) => {
              const c = localizeCharacter(opt, locale);
              const isCorrect = opt.slug === current.slug;
              const showResult = picked !== null;
              return (
                <li key={opt.slug}>
                  <button
                    type="button"
                    disabled={picked !== null}
                    onClick={() => handlePick(opt.slug)}
                    className={cn(
                      "w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all",
                      !showResult && "border-border bg-paper hover:border-wine hover:bg-blush/20",
                      showResult && isCorrect && "border-green-600/50 bg-green-50 text-green-900",
                      showResult && !isCorrect && picked === opt.slug && "border-rouge/50 bg-rouge/10 text-rouge",
                      showResult && !isCorrect && picked !== opt.slug && "border-border/50 opacity-50",
                    )}
                  >
                    {c.name}
                    <span className="mt-0.5 block text-xs font-normal text-ink-mute">
                      {c.workTitle}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      ) : null}

      <p className="mt-6 text-center text-xs text-ink-mute">
        <Link href="/characters" className="text-wine hover:underline">
          {t("quiz.viewAtlas")}
        </Link>
      </p>
    </div>
  );
}
