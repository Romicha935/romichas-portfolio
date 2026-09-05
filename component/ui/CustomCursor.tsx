// 'use client'

// import { useEffect, useRef } from 'react'

// export default function CustomCursor() {
//   const ringRef = useRef<HTMLDivElement>(null)
//   const dotRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     let mx = -100, my = -100, rx = -100, ry = -100
//     let raf: number

//     const onMove = (e: MouseEvent) => {
//       mx = e.clientX; my = e.clientY
//       if (dotRef.current) {
//         dotRef.current.style.left = mx + 'px'
//         dotRef.current.style.top = my + 'px'
//       }
//     }

//     const animate = () => {
//       rx += (mx - rx) * 0.1
//       ry += (my - ry) * 0.1
//       if (ringRef.current) {
//         ringRef.current.style.left = rx + 'px'
//         ringRef.current.style.top = ry + 'px'
//       }
//       raf = requestAnimationFrame(animate)
//     }

//     const onDown = () => ringRef.current?.classList.add('clk')
//     const onUp = () => ringRef.current?.classList.remove('clk')

//     const addHover = (el: Element) => {
//       el.addEventListener('mouseenter', () => ringRef.current?.classList.add('hov'))
//       el.addEventListener('mouseleave', () => ringRef.current?.classList.remove('hov'))
//     }

//     document.querySelectorAll('a, button').forEach(addHover)
//     document.addEventListener('mousemove', onMove)
//     document.addEventListener('mousedown', onDown)
//     document.addEventListener('mouseup', onUp)
//     animate()

//     return () => {
//       cancelAnimationFrame(raf)
//       document.removeEventListener('mousemove', onMove)
//       document.removeEventListener('mousedown', onDown)
//       document.removeEventListener('mouseup', onUp)
//     }
//   }, [])

//   return (
//     <>
//       <div ref={ringRef} id="cursor-ring" />
//       <div ref={dotRef} id="cursor-dot" />
//     </>
//   )
// }