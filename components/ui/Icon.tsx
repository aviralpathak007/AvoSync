import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
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
  Plus,
  Quote,
  Rocket,
  Send,
  Shapes,
  ShoppingCart,
  Smartphone,
  Sparkles,
  SquareTerminal,
  TriangleAlert,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons = {
  alert: TriangleAlert,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  blocks: Blocks,
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
  plus: Plus,
  pointer: MousePointerClick,
  quote: Quote,
  rocket: Rocket,
  send: Send,
  shapes: Shapes,
  smartphone: Smartphone,
  sparkles: Sparkles,
  terminal: SquareTerminal,
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
