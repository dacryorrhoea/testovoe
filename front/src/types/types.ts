export type LoginData = {
  email: string, 
  password: string
}

export type RegisterData = {
  username: string,
  email: string,
  password: string
}

export type DealData = {
  title: string,
  desc: string
}

export type ProfileData = {
  username: string,
  email: string
}

export type ResponseData = {
  data: object|object[]|null,
  message: string
}
