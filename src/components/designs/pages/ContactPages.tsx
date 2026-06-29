"use client";

import { LocaleLink as Link } from "@/components/LocaleLink";
import { ExternalLink, Mail, ShieldAlert } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLocale, useT } from "@/components/LocaleProvider";
import { DesignPageRouter } from "../DesignPageRouter";

export type ContactPageProps = {
  feedbackUrl: string;
};

function ContactBody({ feedbackUrl }: ContactPageProps) {
  const t = useT();
  const locale = useLocale();

  return (
    <div className="mt-10 max-w-2xl space-y-8">
      <p className="text-sm leading-relaxed text-ink-soft">{t("pages.contact.intro")}</p>

      <section className="rounded-2xl border border-border bg-background-deep/40 p-6">
        <div className="flex items-start gap-3">
          <ShieldAlert size={20} className="mt-0.5 shrink-0 text-wine" aria-hidden />
          <div>
            <h2 className="text-sm font-medium text-ink">{t("pages.contact.takedownTitle")}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {t("pages.contact.takedownBody")}
            </p>
            <a
              href={feedbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 inline-flex !px-4 !py-2 text-sm"
            >
              <ExternalLink size={16} />
              {t("pages.contact.takedownCta")}
            </a>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border p-6">
        <div className="flex items-start gap-3">
          <Mail size={20} className="mt-0.5 shrink-0 text-wine" aria-hidden />
          <div>
            <h2 className="text-sm font-medium text-ink">{t("pages.contact.generalTitle")}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {t("pages.contact.generalBody")}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>
                <Link href="/about" className="text-wine hover:underline">
                  {t("nav.aboutHer")}
                </Link>
              </li>
              <li>
                <Link href="/fans" className="text-wine hover:underline">
                  {t("nav.fans")}
                </Link>
              </li>
              <li>
                <a
                  href={locale === "en" ? "/feed-en.xml" : "/feed.xml"}
                  className="text-wine hover:underline"
                >
                  {t("site.rss")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <p className="text-xs leading-relaxed text-ink-mute">{t("pages.contact.footer")}</p>
    </div>
  );
}

export function ContactWarmCinema(props: ContactPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <SectionTitle
        index="—"
        kicker="Contact"
        title={t("pages.contact.title")}
        subtitle={t("pages.contact.subtitle")}
      />
      <ContactBody {...props} />
    </Container>
  );
}

export function ContactXianxia(props: ContactPageProps) {
  const t = useT();
  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-8 text-center">
        <p className="kicker justify-center">联 · Contact</p>
        <h1 className="zh-display text-5xl text-wine-deep">{t("pages.contact.title")}</h1>
        <p className="mt-3 text-sm text-ink-mute">{t("pages.contact.subtitle")}</p>
      </div>
      <div className="container-main">
        <ContactBody {...props} />
      </div>
    </div>
  );
}

export function ContactFanSticker(props: ContactPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-2 text-center text-4xl font-extrabold text-wine-deep">
        {t("pages.contact.title")}
      </h1>
      <p className="mb-8 text-center text-sm text-ink-mute">{t("pages.contact.subtitle")}</p>
      <ContactBody {...props} />
    </Container>
  );
}

export function ContactEditorial(props: ContactPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Contact</p>
      <h1 className="display mt-2 text-5xl text-wine-deep">{t("pages.contact.title")}</h1>
      <p className="mt-3 max-w-xl text-sm text-ink-mute">{t("pages.contact.subtitle")}</p>
      <div className="gold-rule mt-8 h-px" />
      <ContactBody {...props} />
    </Container>
  );
}

const contactVariants = {
  c: ContactWarmCinema,
  a: ContactXianxia,
  b: ContactFanSticker,
  d: ContactEditorial,
};

export function ContactPageDesign(props: ContactPageProps) {
  return <DesignPageRouter variants={contactVariants} props={props} />;
}
