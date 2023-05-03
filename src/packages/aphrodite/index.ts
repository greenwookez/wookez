import {StyleDeclaration, StyleSheet, css as acss} from 'aphrodite'

export const CreateSheet = <T>(styles: StyleDeclaration<T>) => {
  return StyleSheet.create(styles)
}

export const css = acss