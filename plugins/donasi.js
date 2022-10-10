let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│ • *Byu:* [${global.ppulsa}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* -_
│ • *Gopay:* -_
│ • *Ovo:* -_
│ • *Link Aja:* -_
❏────
`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
