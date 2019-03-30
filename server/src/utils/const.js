
export const LANG_EN = 'en'
export const LANG_JP = 'jp'

export const getErrorUnknown = (lang = LANG_EN) => lang === LANG_EN
  ? 'Oops something went wrong. Please try it again later.'
  : '不具合が発生しました。お手数ですが、時間をおいて再度お試しください。'

export const getNoticeTitle = () => '【ポートフォリオ】問い合わせ'

export const getConfirmationTitle = (lang = LANG_EN) => lang === LANG_EN
  ? 'Wataru | Thank you for your inquiry!'
  : '【前田】お問い合わせありがとうございます!'

export const getNoticeMessage = (
  name,
  email,
  phone,
  message,
) => `
-----------------------------------
・お名前：${name}
・E-Mail：${email}
・電話番号：${phone}
・お問い合わせ内容：${message}
-----------------------------------
`

export const getConfirmationMessage = (
  name,
  email,
  phone,
  message,
  lang = LANG_EN,
) => lang === LANG_EN ? `
Dear Mr/Miss ${name},

Thank you for your inquiry. We have received your email with following contents. 
----------------------------------------
・Name：${name}
・Email：${email}
・Phone Number: ${phone}
・Message：${message}
----------------------------------------\n
It will take us about 24 hours to get across to you on inquiries.
Thank you for your understandings.

Sincerely,

Wataru Maeda
email: w.maeda.ca@gmail.com
`
: `
${name}様

お問い合わせありがとうございます。
以下の内容で送信いたしました。
----------------------------------------
・お名前：${name}
・Email：${email}
・電話番号：${phone}
・お問い合わせ内容：${message}
----------------------------------------
24時間以内に、折り返しのご連絡差し上げます。
引き続き、よろしくお願い致します。

前田 渉(マエダ ワタル)
Email: w.maeda.jp@gmail.com
`