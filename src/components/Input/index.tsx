import { InputHTMLAttributes } from 'react'
import { InputStyleContainer } from './stylest'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...props }: InputProps) {
  return <InputStyleContainer {...props} />
}
