const PORTAL_URL = 'https://hospitalist-network.vercel.app';

interface PortalLinkProps {
  children: React.ReactNode;
  className?: string;
}

export function PortalLink({ children, className }: PortalLinkProps) {
  return (
    <a
      href={PORTAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
