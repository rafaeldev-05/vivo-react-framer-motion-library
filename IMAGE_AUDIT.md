# Auditoria dos assets

Auditoria realizada em 28 de julho de 2026. Os originais estão preservados em
`image-backups/originals-2026-07-28/`.

| Arquivo | Dimensões | Canal | Transparência real | Quadriculado incorporado |
| --- | ---: | --- | --- | --- |
| `hero/hero-background.png` | 1376×768 | ARGB | Não | Não |
| `hero/hero-lights.png` | 1376×768 | ARGB | Não | Sim |
| `hero/hero-phone.png` | 848×1264 | ARGB | Não | Sim |
| `mobile/mobile-person.png` | 1376×768 | ARGB | Não | Não |
| `mobile/floating-phones.png` | 1376×768 | ARGB | Não | Sim |
| `fiber/fiber-room.png` | 1376×768 | ARGB | Não | Não |
| `ecosystem/vivo-total-devices.png` | 1376×768 | ARGB | Não | Sim |

Todos os arquivos têm formato de pixel `Format32bppArgb`, porém os sete possuem
alfa mínimo 255 e zero pixels transparentes. O quadriculado dos quatro arquivos
marcados está gravado nos valores RGB e não pode ser removido com precisão por
CSS ou por uma conversão automática.

Substitua esses quatro PNGs por versões com transparência real nos mesmos
caminhos. Nenhuma alteração adicional de importação será necessária.
