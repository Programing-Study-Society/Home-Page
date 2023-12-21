import { useInView } from "react-intersection-observer";
import "./fade-animation.css"

type FadeProps = {
	rootMargin: string,
	triggerOnce: boolean,
	children: React.ReactNode,
}

export function FadeInToUp({
	rootMargin,
	triggerOnce,
	children
	}:FadeProps) {
	const { ref, inView } = useInView({
		// オプション
		rootMargin: rootMargin, // ref要素が現れてから50px過ぎたら
		triggerOnce: triggerOnce, // 最初の一度だけ実行
	});

	return (
		<div
			ref={ref}
			className={`${inView ? "opacity-100" : "opacity-0 translate-y-[50%]"} duration-[1s] `}
		>
			{children}
		</div>
	)
}