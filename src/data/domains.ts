export type DomainCard = {
  cls: 'd1' | 'd2' | 'd3';
  num: string;
  kicker: string;
  title: string;
  sub: string[];
  body: string;
  pixelColor: string;
};

export const DOMAIN_CARDS: DomainCard[] = [
  {
    cls: 'd1',
    num: '01',
    kicker: '// strength',
    title: '得意領域',
    sub: ['APIを用いた開発', '技術のキャッチアップ'],
    body: '外部サービスやSaaSをAPIで連携させ、新しい体験を作り出すのが得意です。Resend、LINE Messaging API、Google Calendar / Meet API などを軸に、既存のワークフローを自動化・拡張する小さなプロダクトを設計・実装してきました。また、業務で足りない技術は自力でキャッチアップして進めることができます。今まで頂いたお仕事に関して、ほとんど触ったことのないような技術を自ら調べ、学びなんとか仕事をこなしてきました。今後も、割り振られた仕事に対して知らないことを自ら調べなんとかします。',
    pixelColor: 'b',
  },
  {
    cls: 'd2',
    num: '02',
    kicker: '// weakness',
    title: '苦手な領域',
    sub: ['APIを使わない開発'],
    body: 'API連携だけに頼らず、コスト削減のためにあえて複雑な機能を自前で実装できると思えないため、そのようなことをできるようになりたいと考えています。例えば、Zoom-Video-SDKを使って実装できる機能を、コスト削減のために自前で実装するというのは難易度が高いと感じます。',
    pixelColor: 'k',
  },
  {
    cls: 'd3',
    num: '03',
    kicker: '// curious',
    title: '興味のある領域',
    sub: ['AI を組み込んだサービス開発', 'AI活用', 'AI と人の関わり','自動化'],
    body: '「LLMをプロダクトに組み込むこと」・「AIを日々の生活や業務に活かすこと」の両方に興味があります。例えば、プロンプト設計、エージェント構築、Claudeデスクトップによる自動化やClaudeを使ったWebサイト制作など、AIの活用に強い関心があります。業務とは直接関係しないかもしれませんが、AIと人の関わりに興味も抱いています。例えば、アニメで言うとSAOの「ゆい」というキャラクターや、AI Vtuberあたりがすごいイメージに近いです。また、何かを自動化することにも興味があります。自動化については、なんとなく自動化っていいなと思います。',
    pixelColor: 'y',
  },
];
