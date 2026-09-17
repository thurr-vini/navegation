import { Pressable, Text } from 'react-native';

import { estilosBotao } from './Botao.styles';

type BotaoProps = {
  texto: string;
  onPress: () => void;
};

export function Botao({ texto, onPress }: BotaoProps) {
  return (
    <Pressable style={estilosBotao.botao} onPress={onPress}>
      <Text style={estilosBotao.texto}>{texto}</Text>
    </Pressable>
  );
}
