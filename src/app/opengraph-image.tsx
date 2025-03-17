import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
export const alt = 'Ibraheem Ganayim - R&D Team Lead & Software Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '24px',
            textAlign: 'center',
          }}
        >
          Ibraheem Ganayim
        </div>
        <div
          style={{
            background: 'linear-gradient(to right, #3B82F6, #60A5FA)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: 36,
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          R&D Team Lead & Software Engineer
        </div>
        <div
          style={{
            color: '#9CA3AF',
            fontSize: 24,
            textAlign: 'center',
          }}
        >
          Full Stack Development • Cloud Architecture • Team Leadership
        </div>
      </div>
    ),
    {
      ...size,
      fonts: []
    }
  );
}