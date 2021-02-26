//TODO: username
export const validateUsername = (username: string) => {
  const fmtUsername = username.trim()

  return fmtUsername.length >= 3 && fmtUsername.length <= 60
}
export const validateEmail = (email: string) => {
  const fmtEmail = email.trim().toLowerCase()

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  return emailRegex.test(fmtEmail)
}
export const validatePassword = (password: string) =>
  password.length >= 6 && password.length <= 50


//TODO: แจ้งงาน IT
export const ValidateTypeJob = (typeJob: string) => {
  const fmtTypeJob = typeJob.trim()
  return fmtTypeJob.length >= 3 && fmtTypeJob.length <= 60
}
export const ValidateComment = (comment: string) => {
  const fmtComment = comment.trim()
  return fmtComment.length >= 3 && fmtComment.length <= 60
}


//TODO: บันทึกข้อมูลโรงงาน Tier
export const ValidateNameFactory = (nameFactory: string) => {
  const fmtNameFactory = nameFactory.trim()
  return fmtNameFactory.length >= 3 && fmtNameFactory.length <= 60
}

//TODO: บันทึกข้อมูลโรงงาน Tier
export const ValidateCompanyName = (companyName: string) => {
  const fmtCompanyName = companyName.trim()
  return fmtCompanyName.length >= 3 && fmtCompanyName.length <= 60
}



