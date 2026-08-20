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
    sub: ['API連携の提案', '技術のキャッチアップ', '最低限のWebセキュリティ'],
    body: '外部サービスやSaaSをAPIで連携させ、既存のワークフローを自動化・拡張する仕組みを提案するのが比較的得意です。Supabase、Resend、LINE Messaging API、Google Calendar / Meet API などを組み合わせた改善案を考え、必要な技術は自分で調べてキャッチアップしながら進めてきました。Webセキュリティについても、フォームのバリデーション、環境変数によるトークンの秘匿、Supabase の RLS やレート制限といった最低限の対策は自分で行えます。',
    pixelColor: 'b',
  },
  {
    cls: 'd2',
    num: '02',
    kicker: '// weakness',
    title: '苦手な領域',
    sub: ['深いセキュリティ', 'DB・APIの設計', '綺麗なコード'],
    body: '高度なWebセキュリティ対策や、DB・API の設計、読みやすく綺麗なコードを書くことは、まだ苦手です。小規模から中規模の使えるレベルのシステムは作れますが、良い設計や綺麗なコード、保守しやすいような開発はできるとは言えませんし、開発のスピードも遅いほうだと感じています。これらは、これから重点的に伸ばしていきたい部分です。また、Webのセキュリティに関しましては、最低限の知識はあるため、特定の機能に応じた対策は都度調べて対応していこうと考えております。',
    pixelColor: 'k',
  },
  {
    cls: 'd3',
    num: '03',
    kicker: '// curious',
    title: '興味のある領域',
    sub: ['AI を組み込んだサービス開発', 'AI活用', 'AI と人の関わり','自動化'],
    body: '「LLMをプロダクトに組み込むこと」と「AIを日々の生活や業務に活かすこと」の両方に興味があります。RAGやエージェント設計・構築、Claudeによる日々のルーティンの自動化、Claude を使った Web サイト制作など、AI の活用に強い関心があります。また、AI と人の関わりにも興味があり、アニメ SAO の「ゆい」や AI Vtuber のような存在にイメージを重ねています。何かを自動化することにも、純粋に興味があります。',
    pixelColor: 'y',
  },
];
