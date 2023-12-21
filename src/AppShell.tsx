import * as stylex from "@stylexjs/stylex";
import { colors, spacing } from "./tokens.stylex";

const styles = stylex.create({
  root: {
    color: colors.primaryText,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
    minHeight: '100vh',
  },

  content: {
    backgroundColor: colors.panelBackgroundColor,
    flex: 1,
    padding: spacing.md
  },

  navPanel: {
    backgroundColor: colors.brand,
    color: 'white',
    paddingTop: 100,
    flexBasis: '25%',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  navItem: {
    padding: spacing.xxs,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: colors.brand,
      color: 'white',
    },
  },
});

export const AppShell: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.navPanel)}>
        <div {...stylex.props(styles.navItem)}>
          Dashboard
        </div>

        <div {...stylex.props(styles.navItem)}>
          Dashboard
        </div>
      </div>

      <div {...stylex.props(styles.content)}>
        {children}
      </div>
    </div>
  );
}