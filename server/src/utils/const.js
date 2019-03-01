
export const LANG_EN = 'en'
export const LANG_JP = 'jp'

export const getErrorUnknow = (lang = LANG_EN) => lang === LANG_EN
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
  -----\n
  お名前：${name}\n
  E-Mail：${email}\n
  電話番号：${phone}\n
  お問い合わせ内容：${message}\n
  -----\n
`

export const getConfirmationMessage = (
  name,
  email,
  phone,
  message,
  lang = LANG_EN,
) => lang === LANG_EN ? `
  Dear Mr/Miss ${name},\n\n
  Thank you for your inquiry. We have received your email with following contents. 
  -----\n
  Name：${name}\n
  Email：${email}\n
  Phone Number${phone}\n
  Message：${message}\n
  -----\n\n
  It will take us about three days to get across to you on inquiries.\n\n
  Thank you for your understandings.\n\n
  Sincerely,\n\n
  Wataru Maeda\n
  email: w.maeda.ca@gmail.com
`
: `
  ${name}様\n\nお問い合わせありがとうございます。\n
  以下の内容で送信いたしました。\n\n
  -----\n
  お名前：${name}\n
  E-Mail：${email}\n
  電話番号：${phone}\n
  お問い合わせ内容：${message}\n
  -----\n\n
  3営業日以内に、ご連絡いたします。\n\n
  よろしくお願いいたします。\n\n
  前田 渉(マエダ ワタル)\n
  E-Mail: w.maeda.jp@gmail.com
`