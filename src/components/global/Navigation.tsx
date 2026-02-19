import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@components/ui/navigation-menu";
import Highlighter from "@components/ui/highlighter";
import { cn } from "@lib/utils";
import { AnimatedThemeToggler } from "@components/ui/animated-theme-toggler";

export function Navigation({ className }: { className?: string }) {
  return (
    <NavigationMenu className={cn("mx-auto max-w-xl", className)}>
      <NavigationMenuList>
        <NavigationMenuItem className="mr-4">
          <NavigationMenuLink href="/">
            <Highlighter color="lightblue">StudioEK</Highlighter>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Linkler</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150">
              {components.map((component) => (
                <li key={component.title}>
                  <NavigationMenuLink asChild>
                    <a
                      href={component.href}
                      className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                    >
                      <div className="text-sm leading-none font-medium">
                        {component.title}
                      </div>
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {component.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <AnimatedThemeToggler />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
