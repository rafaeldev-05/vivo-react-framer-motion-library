import { Container } from "@/components/ui/Container";
import { footerGroups, socialLinks } from "@/data/landing";

export function Footer() {
  return (
    <footer className="bg-[#160923] py-14 text-white">
      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="#inicio" className="text-4xl font-black tracking-[-.08em]" aria-label="Vivo, início">vivo<span className="text-[#ff35a8]">.</span></a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">Conexões que aproximam pessoas, ideias e possibilidades em todos os momentos.</p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ label, icon: Icon }) => (
                <a key={label} href="#inicio" aria-label={label} className="grid size-10 place-items-center rounded-full border border-white/12 text-white/70 transition hover:border-fuchsia-400 hover:text-white">
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-bold">{group.title}</h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => <li key={link}><a href="#inicio" className="text-sm text-white/55 transition hover:text-white">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Projeto conceitual de interface, sem vínculo oficial com a Vivo.</p>
          <p>© {new Date().getFullYear()} Vivo Conecta. Demonstração visual.</p>
        </div>
      </Container>
    </footer>
  );
}
