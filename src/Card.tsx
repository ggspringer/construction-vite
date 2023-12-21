import stylex from "@stylexjs/stylex";
import { radius, shadows, spacing } from "./tokens.stylex";

const styles = stylex.create({
  card: {
    backgroundColor: '#fff', 
    borderRadius: radius.sm,
    boxShadow: shadows.md,
    padding: spacing.md,
    margin: spacing.md,
    maxWidth: '300px',
    borderLeft: '12px solid #627D98',
  },
});

export const Card = () => {
  return (
    <div {...stylex.props(styles.card)}>
      Content
    </div>
  );
}