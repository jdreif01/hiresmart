declare module '*.svg' {
  import React from 'react';
  const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SvgComponent;
}

declare module '*.svg?react' {
  import React from 'react';
  const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SvgComponent;
}