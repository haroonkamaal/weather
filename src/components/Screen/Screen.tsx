import React, { useCallback } from 'react';
import { View } from 'react-native';
import { styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import { NavBar } from '../NavBar/NavBar';
import { NavbarProps } from '../NavBar/Types';

interface Props extends NavbarProps {
  children: React.ReactNode;
}

export const Screen: React.FC<Props> = React.memo(
  ({ children, ...rest }: Props) => {
    const navBarProps: NavbarProps = rest as NavbarProps;
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
      navigation.setOptions({
        header: () => renderNavBar(),
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigation]);

    const renderNavBar = useCallback(() => {
      return <NavBar {...navBarProps} />;
    }, [navBarProps]);

    return <View style={styles.container}>{children}</View>;
  },
);
