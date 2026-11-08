import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Bot,
  Check,
  ChevronDown,
  CircleCheck,
  CodeXml,
  Cpu,
  Gauge,
  Infinity as InfinityIcon,
  Layers,
  LoaderCircle,
  Lock,
  Mail,
  Menu,
  MessageSquare,
  Monitor,
  MousePointerClick,
  Palette,
  Plug,
  Plus,
  Quote,
  Rocket,
  Send,
  ShieldCheck,
  Shapes,
  ShoppingCart,
  Smartphone,
  Sparkles,
  SquareTerminal,
  TriangleAlert,
  Workflow,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons = {
  alert: TriangleAlert,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  blocks: Blocks,
  bot: Bot,
  cart: ShoppingCart,
  check: Check,
  checkCircle: CircleCheck,
  chevronDown: ChevronDown,
  close: X,
  code: CodeXml,
  cpu: Cpu,
  gauge: Gauge,
  infinity: InfinityIcon,
  layers: Layers,
  loader: LoaderCircle,
  lock: Lock,
  mail: Mail,
  menu: Menu,
  message: MessageSquare,
  monitor: Monitor,
  palette: Palette,
  plug: Plug,
  plus: Plus,
  pointer: MousePointerClick,
  quote: Quote,
  rocket: Rocket,
  send: Send,
  shield: ShieldCheck,
  shapes: Shapes,
  smartphone: Smartphone,
  sparkles: Sparkles,
  terminal: SquareTerminal,
  workflow: Workflow,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

/** Resolves a string icon name so content files stay plain data (and server-to-client safe). */
export function Icon({ name, className, size = 20, strokeWidth = 1.75 }: IconProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" className={className} size={size} strokeWidth={strokeWidth} />;
}
