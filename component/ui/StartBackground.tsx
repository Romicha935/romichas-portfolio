'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    
    // Higher count for that rich "Mustafiz" portfolio look
    const count = 450; 

    const colors = ['#ffffff', '#fff4e6', '#e6f2ff']; // White, slight yellow, slight blue

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      stars = [];
      for (let i = 0; i < count; i++) {
        // We use a non-linear distribution so most stars are tiny (far away)
        const depth = Math.pow(Math.random(), 3); 
        
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: depth * 1.8 + 0.4, 
          // Fast speed for the "warp" feel, but slow for the background stars
          speed: depth * 0.7 + 0.02, 
          opacity: depth * 0.8 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        
        // Add subtle glow to larger stars
        if (star.size > 1.2) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'white';
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.opacity;
        ctx.fill();

        star.x += star.speed;

        // Loop back to start
        if (star.x > canvas.width) {
          star.x = -2;
          star.y = Math.random() * canvas.height;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    createStars();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0, // Keeps it behind your text
        pointerEvents: 'none',
        background: 'transparent',
      }}
    />
  );
}


// 'use client'

// import { useEffect, useRef } from 'react'

// interface StarParticle {
//   r: number
//   a: number
//   size: number
//   opacity: number
//   speed: number
// }

// export default function StarBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current!
//     const ctx = canvas.getContext('2d')!
//     let raf: number
//     let stars: StarParticle[] = []

//     const init = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight

//       const count = window.innerWidth < 768 ? 400 : 800
//       const maxR = Math.hypot(canvas.width, canvas.height) * 0.9

//       stars = Array.from({ length: count }, () => ({
//         r: Math.random() * maxR,
//         a: Math.random() * Math.PI * 2,
//    size: Math.random() < 0.6
//   ? Math.random() * 1.5 + 0.8
//   : Math.random() * 4 + 2,
//         opacity: Math.random() * 0.6 + 0.25,
//         speed: (Math.random() * 0.00012 + 0.00004) *
//                (Math.random() < 0.5 ? 1 : -1),
//       }))
//     }

//     const loop = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
//       ctx.fillStyle = '#04060f'
//       ctx.fillRect(0, 0, canvas.width, canvas.height)

//       const cx = canvas.width / 2
//       const cy = canvas.height / 2

//    stars.forEach(s => {
//   s.a += s.speed

//   const x = cx + Math.cos(s.a) * s.r
//   const y = cy + Math.sin(s.a) * s.r

//   const isMovingFast = Math.abs(s.speed) > 0.00015

//   ctx.beginPath()
//   ctx.arc(x, y, isMovingFast ? s.size * 2.5 : s.size, 0, Math.PI * 2)

//   ctx.fillStyle = `rgba(255,255,255,${isMovingFast ? s.opacity + 0.3 : s.opacity})`

//   ctx.shadowBlur = isMovingFast ? 12 : 4
//   ctx.shadowColor = 'white'

//   ctx.fill()
// })

//       raf = requestAnimationFrame(loop)
//     }

//     init()
//     loop()

//     const onResize = () => init()
//     window.addEventListener('resize', onResize)

//     return () => {
//       cancelAnimationFrame(raf)
//       window.removeEventListener('resize', onResize)
//     }
//   }, [])

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 z-0 pointer-events-none"
//     />
//   )
// }






// 'use client'

// import { useEffect, useRef } from 'react'

// const COLORS: [number, number, number][] = [
//   [255, 255, 255],
//   [200, 220, 255],
//   [255, 240, 200],
//   [180, 210, 255],
//   [255, 255, 220],
//   [220, 200, 255],
// ]

// function drawStarShape(
//   ctx: CanvasRenderingContext2D,
//   x: number,
//   y: number,
//   spikes: number,
//   outerR: number,
//   innerR: number,
//   rot: number
// ) {
//   const step = Math.PI / spikes
//   let angle = rot
//   ctx.beginPath()
//   for (let i = 0; i < spikes * 2; i++) {
//     const r = i % 2 === 0 ? outerR : innerR
//     ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r)
//     angle += step
//   }
//   ctx.closePath()
// }

// class Star {
//   x = 0; y = 0; maxR = 0; isStar = false
//   spikes = 5; rot = 0; rotSpeed = 0
//   phase = 0; speed = 0; baseAlpha = 0; ampAlpha = 0
//   fadeIn = false; fadeAlpha = 1
//   r = 255; g = 255; b = 255
//   w = 0; h = 0

//   constructor(w: number, h: number, init = true) {
//     this.w = w; this.h = h
//     this.reset(init)
//   }

//   reset(init: boolean) {
//     this.x = Math.random() * this.w
//     this.y = Math.random() * this.h

//     const roll = Math.random()
//     if (roll < 0.6) this.maxR = Math.random() * 0.8 + 0.2
//     else if (roll < 0.88) this.maxR = Math.random() * 1.2 + 0.8
//     else if (roll < 0.97) this.maxR = Math.random() * 1.8 + 1.5
//     else this.maxR = Math.random() * 2.5 + 2.5

//     this.isStar = this.maxR > 1.8
//     this.spikes = Math.random() > 0.5 ? 4 : 5
//     this.rot = Math.random() * Math.PI * 2
//     this.rotSpeed = (Math.random() - 0.5) * 0.008
//     this.phase = init ? Math.random() * Math.PI * 2 : 0
//     this.speed = Math.random() * 0.018 + 0.006
//     this.baseAlpha = Math.random() * 0.5 + 0.3
//     this.ampAlpha = Math.random() * 0.35 + 0.1
//     this.fadeIn = true
//     this.fadeAlpha = init ? 1 : 0

//     const col = COLORS[Math.floor(Math.random() * COLORS.length)]
//     this.r = col[0]; this.g = col[1]; this.b = col[2]
//   }

//   update() {
//     this.phase += this.speed
//     this.rot += this.rotSpeed

//     if (this.fadeIn) {
//       this.fadeAlpha = Math.min(1, this.fadeAlpha + 0.008)
//       if (this.fadeAlpha >= 1) this.fadeIn = false
//     }

//     if (Math.random() < 0.00008) this.reset(false)
//   }

//   draw(ctx: CanvasRenderingContext2D) {
//     // 🌟 STRONG TWINKLE + FLICKER
//     const twinkle =
//       this.baseAlpha +
//       Math.sin(this.phase * 2) * this.ampAlpha

//     const flicker = Math.random() * 0.2

//     const alpha = Math.max(
//       0,
//       Math.min(1, (twinkle + flicker) * this.fadeAlpha)
//     )

//     ctx.globalAlpha = alpha

//     // ✨ GLOW EFFECT
//     ctx.shadowBlur = this.isStar ? 10 : 5
//     ctx.shadowColor = `rgb(${this.r},${this.g},${this.b})`

//     if (this.isStar) {
//       const grd = ctx.createRadialGradient(
//         this.x, this.y, 0,
//         this.x, this.y, this.maxR * 4
//       )
//       grd.addColorStop(0, `rgba(${this.r},${this.g},${this.b},0.35)`)
//       grd.addColorStop(1, `rgba(${this.r},${this.g},${this.b},0)`)

//       ctx.fillStyle = grd
//       ctx.beginPath()
//       ctx.arc(this.x, this.y, this.maxR * 4, 0, Math.PI * 2)
//       ctx.fill()

//       ctx.fillStyle = `rgb(${this.r},${this.g},${this.b})`
//       drawStarShape(ctx, this.x, this.y, this.spikes, this.maxR, this.maxR * 0.42, this.rot)
//       ctx.fill()

//       ctx.fillStyle = 'rgba(255,255,255,0.9)'
//       ctx.beginPath()
//       ctx.arc(this.x, this.y, this.maxR * 0.3, 0, Math.PI * 2)
//       ctx.fill()
//     } else {
//       if (this.maxR > 1) {
//         const grd = ctx.createRadialGradient(
//           this.x, this.y, 0,
//           this.x, this.y, this.maxR * 3
//         )
//         grd.addColorStop(0, `rgba(${this.r},${this.g},${this.b},0.2)`)
//         grd.addColorStop(1, `rgba(${this.r},${this.g},${this.b},0)`)

//         ctx.fillStyle = grd
//         ctx.beginPath()
//         ctx.arc(this.x, this.y, this.maxR * 3, 0, Math.PI * 2)
//         ctx.fill()
//       }

//       ctx.fillStyle = `rgb(${this.r},${this.g},${this.b})`
//       ctx.beginPath()
//       ctx.arc(this.x, this.y, this.maxR, 0, Math.PI * 2)
//       ctx.fill()
//     }

//     ctx.shadowBlur = 0
//     ctx.globalAlpha = 1
//   }
// }

// class ShootingStar {
//   x = 0; y = 0; len = 0; speed = 0
//   angle = 0; alpha = 0; life = 0
//   active = false; timer = 0
//   w = 0; h = 0

//   constructor(w: number, h: number) {
//     this.w = w; this.h = h
//     this.reset()
//   }

//   reset() {
//     this.x = Math.random() * this.w * 0.7
//     this.y = Math.random() * this.h * 0.4
//     this.len = Math.random() * 120 + 60
//     this.speed = Math.random() * 8 + 6
//     this.angle = Math.random() * Math.PI * 2
//     this.alpha = 0
//     this.life = 1
//     this.active = false
//     this.timer = Math.random() * 400 + 200
//   }

//   update() {
//     if (!this.active) {
//       this.timer--
//       if (this.timer <= 0) {
//         this.active = true
//         this.alpha = 0
//         this.life = 1
//       }
//       return
//     }

//     this.x += Math.cos(this.angle) * this.speed
//     this.y += Math.sin(this.angle) * this.speed

//     this.life -= 0.018
//     this.alpha = this.life > 0.8 ? (1 - this.life) * 5 : this.life

//     if (this.life <= 0) this.reset()
//   }

//   draw(ctx: CanvasRenderingContext2D) {
//     if (!this.active) return

//     const tx = this.x - Math.cos(this.angle) * this.len
//     const ty = this.y - Math.sin(this.angle) * this.len

//     const grd = ctx.createLinearGradient(tx, ty, this.x, this.y)
//     grd.addColorStop(0, 'rgba(255,255,255,0)')
//     grd.addColorStop(1, `rgba(255,255,255,${this.alpha})`)

//     ctx.strokeStyle = grd
//     ctx.lineWidth = 1.5
//     ctx.beginPath()
//     ctx.moveTo(tx, ty)
//     ctx.lineTo(this.x, this.y)
//     ctx.stroke()

//     ctx.fillStyle = '#fff'
//     ctx.beginPath()
//     ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2)
//     ctx.fill()
//   }
// }

// export default function StarBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current!
//     const ctx = canvas.getContext('2d')!

//     let raf: number
//     let stars: Star[] = []
//     let shooters: ShootingStar[] = []

//     const init = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight

//       stars = Array.from(
//         { length: window.innerWidth < 768 ? 150 : 320 },
//         () => new Star(canvas.width, canvas.height, true)
//       )

//       shooters = Array.from(
//         { length: 3 },
//         () => new ShootingStar(canvas.width, canvas.height)
//       )
//     }

//     const handleResize = () => init()

//     init()
//     window.addEventListener('resize', handleResize)

//     const loop = () => {
//       ctx.fillStyle = 'rgba(4,5,15,0.2)'
//       ctx.fillRect(0, 0, canvas.width, canvas.height)

//       stars.forEach(s => {
//         s.update()
//         s.draw(ctx)
//       })

//       shooters.forEach(s => {
//         s.update()
//         s.draw(ctx)
//       })

//       raf = requestAnimationFrame(loop)
//     }

//     loop()

//     return () => {
//       cancelAnimationFrame(raf)
//       window.removeEventListener('resize', handleResize)
//     }
//   }, [])

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 z-0 pointer-events-none"
//     />
//   )
// }