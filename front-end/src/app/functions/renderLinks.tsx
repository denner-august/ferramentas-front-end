interface RenderLinksProps {
  link: string;
  nomeLink: string;
}

export function RenderLinks({ link, nomeLink }: RenderLinksProps) {
  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {nomeLink}
      </a>
    </li>
  );
}
