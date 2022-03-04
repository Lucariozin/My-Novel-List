import * as Styles from "./styles";

interface FilterItemProps {
  isActive?: boolean;
  size?: "medium" | "large";
  children: string;
}

export function FilterItem({
  isActive = false,
  size = "medium",
  children
}: FilterItemProps) {

  if (size === "large") {
    return (
      <Styles.LargeContainer isActive={isActive}>{children}</Styles.LargeContainer>
    );
  }
  
  return (
    <Styles.Container isActive={isActive}>{children}</Styles.Container>
  );
}
