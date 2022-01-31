import type { FC } from 'react'
import { FormControl, Input, InputRightElement, IconButton } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

type Form = {
  onSubmit: (e: any) => Promise<void>
  input: string
  onChange: (e: any) => void
}

export const Form: FC<Form> = ({ onSubmit, input, onChange }) => {
  return (
    <form onSubmit={onSubmit} data-testid="form">
      <FormControl>
        {/* here we can use AsyncSelect component for better user experience */}
        <Input id="search" placeholder="Type city" value={input} onChange={onChange} />
        <InputRightElement
          children={<IconButton aria-label="submit" type="submit" icon={<Search2Icon />} data-testid="submit-button" />}
        />
      </FormControl>
    </form>
  )
}
