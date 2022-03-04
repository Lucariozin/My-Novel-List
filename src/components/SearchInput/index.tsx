import * as Styles from "./styles";

import { SearchOutline } from 'react-ionicons';
import { InputHTMLAttributes } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "small" | "large";
}

export function SearchInput({ inputSize = "small", ...rest }: SearchInputProps) {

  if (inputSize === "small") return (
    <Styles.Container>
      <Styles.SearchInput { ...rest } />

      <Styles.Spacing />

      <Styles.SearchButton type="button">
        <SearchOutline color="#646464" />
      </Styles.SearchButton>
    </Styles.Container>
  );

  return (
    <Styles.LargeContainer>
      <Styles.LargeSearchInput { ...rest } />

      <Styles.LargeSpacing />

      <Styles.LargeSearchButton type="button">
        <SearchOutline color="#646464" width="35px" height="35px" />
      </Styles.LargeSearchButton>
    </Styles.LargeContainer>
  );
}
