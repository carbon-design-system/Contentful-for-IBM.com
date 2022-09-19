import dynamic from 'next/dynamic';
const ComponentRenderer = dynamic(import('./ComponentRenderer'), { ssr: false })

const themeMap = {
	'white': 'dds-theme-zone-white',
	'g10': 'dds-theme-zone-g10',
	'g90': 'dds-theme-zone-g90',
	'g100': 'dds-theme-zone-g100'
}

export default function ContentBlock(content) {  
	const { theme, body } = content?.fields || {};

	const themeClass = themeMap[theme]

  return (
    <div className={themeClass}>
      {body?.map(child => {
				return <ComponentRenderer content={child}/>
			})}			
		</div>
  );
}