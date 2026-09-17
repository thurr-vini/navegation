import { StyleSheet } from 'react-native';

export const cores = {
  fundo: '#ffffff',
  texto: '#1a1a1a',
  textoSecundario: '#6b6b6b',
  primaria: '#2f6fed',
  primariaTexto: '#ffffff',
  cartao: '#f5f5f7',
  tag: '#e8edfc',
};

export const espacamentos = {
  pequeno: 8,
  medio: 16,
  grande: 24,
};

export const estilosGlobais = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: cores.fundo,
    padding: espacamentos.medio,
  },
  cartao: {
    backgroundColor: cores.cartao,
    borderRadius: 12,
    padding: espacamentos.medio,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: cores.texto,
  },
  texto: {
    fontSize: 16,
    color: cores.texto,
  },
  textoSecundario: {
    fontSize: 14,
    color: cores.textoSecundario,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: '700',
    color: cores.texto,
    marginTop: espacamentos.grande,
    marginBottom: espacamentos.pequeno,
  },
  linhaTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: espacamentos.pequeno,
  },
  tag: {
    backgroundColor: cores.tag,
    borderRadius: 16,
    paddingVertical: espacamentos.pequeno / 2,
    paddingHorizontal: espacamentos.pequeno,
  },
  tagTexto: {
    color: cores.primaria,
    fontSize: 14,
    fontWeight: '600',
  },
});
