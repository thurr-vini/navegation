import { StyleSheet } from 'react-native';

import { cores, espacamentos } from '@/styles/global';

export const estilosBotao = StyleSheet.create({
  botao: {
    alignSelf: 'flex-start',
    backgroundColor: cores.primaria,
    borderRadius: 8,
    paddingVertical: espacamentos.pequeno,
    paddingHorizontal: espacamentos.grande,
    marginTop: espacamentos.grande,
  },
  texto: {
    color: cores.primariaTexto,
    fontSize: 16,
    fontWeight: '600',
  },
});
