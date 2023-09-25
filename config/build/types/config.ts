export interface BuildPaths {
  build: string
  entry: string
  html: string
  src: string
}

export type BuildMode = 'development' | 'production'

export interface BuildEnv {
  port?: number
  mode?: BuildMode
}

export interface BuildOptions {
  paths: BuildPaths
  mode: BuildMode
  isDev: boolean
  port?: number
  env: BuildEnv
}
