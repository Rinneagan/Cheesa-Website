export type ThemeTypes =  {
    background: string,
    foreground: string,
    cheesaBlue: string,
    mode: ThemeMode
}

export type ThemeMode = 'light' | 'dark';

export type Theme = Record<ThemeMode, ThemeTypes>;