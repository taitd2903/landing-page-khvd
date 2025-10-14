import { useEffect, useRef, useState } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import { EquirectangularVideoAdapter } from '@photo-sphere-viewer/equirectangular-video-adapter';
import { VideoPlugin } from '@photo-sphere-viewer/video-plugin';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
import { SettingsPlugin } from '@photo-sphere-viewer/settings-plugin';
import { ResolutionPlugin } from '@photo-sphere-viewer/resolution-plugin';

import './video.css';

const baseUrl = '/assets/vd360stv.mp4';

const PhotoSphereViewer: React.FC = () => {
  const viewerRef = useRef<Viewer | null>(null);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const videoPluginRef = useRef<VideoPlugin | null>(null); // Lưu trữ videoPlugin

  useEffect(() => {
    if (!viewerRef.current) {
      const viewer = new Viewer({
        container: 'viewer',
        adapter: [
          EquirectangularVideoAdapter,
          {
            muted: true,
            playsinline: true,
            preload: 'auto',
            autoplay: true,
            poster: '/assets/bannervideos.png',
          },
        ],
        caption: 'Ayutthaya <b>&copy; meetle</b>',
        touchmoveTwoFingers: true,
        mousewheelCtrlKey: true,
        navbar: '',

        plugins: [
          [
            VideoPlugin,
            {
              keypoints: [
                { time: 0, position: { yaw: 0, pitch: 0 } },
                { time: 5, position: { yaw: -Math.PI / 4, pitch: Math.PI / 8 } },
              ],
            },
          ],
          AutorotatePlugin,
          SettingsPlugin,
          [
            ResolutionPlugin,
            {
              defaultResolution: 'HD',
              resolutions: [
                { id: 'UHD', label: 'Ultra high', panorama: { source: baseUrl } },
                { id: 'FHD', label: 'High', panorama: { source: baseUrl } },
                { id: 'HD', label: 'Standard', panorama: { source: baseUrl } },
                { id: 'SD', label: 'Low', panorama: { source: baseUrl } },
              ],
            },
          ],
        ],
      });

      viewerRef.current = viewer;

  
      const videoPlugin = viewer.getPlugin<VideoPlugin>(VideoPlugin);
      videoPluginRef.current = videoPlugin; 

      if (videoPlugin && !hasPlayed) {
        videoPlugin.play();
        setIsPlaying(true);

      
        setTimeout(() => {
          if (videoPluginRef.current && typeof videoPluginRef.current.pause === 'function') {
            videoPluginRef.current.pause();
            setIsPlaying(false);
          }
        }, 500);

        setHasPlayed(true); 
      }
    }

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, [hasPlayed]); 

  const handlePlay = () => {
    const viewer = viewerRef.current;
    if (viewer) {
      const videoPlugin = viewer.getPlugin<VideoPlugin>(VideoPlugin);

      if (videoPlugin && typeof videoPlugin.play === 'function') {
        videoPlugin.play();
        setIsPlaying(true);
        setIsButtonVisible(false);
      }
    }
  };

  const handlePause = () => {
    const viewer = viewerRef.current;
    if (viewer) {
      const videoPlugin = viewer.getPlugin<VideoPlugin>(VideoPlugin);

      if (videoPlugin && typeof videoPlugin.pause === 'function') {
        videoPlugin.pause();
        setIsPlaying(false);
        setIsButtonVisible(true);
      }
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div id="viewer" style={{ width: '100%', height: '100%' }}></div>
      {isButtonVisible && !isPlaying && (
        <img
          onClick={handlePlay}
          style={{
            width: '46px',
            height: '46px',
            position: 'absolute',
            bottom: '1px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            marginBottom: '0px',
            border: 'none',
            cursor: 'pointer',
            zIndex: 1000,
          }}
          src="/assets/PlayCircle.svg"
          alt=""
        />
      )}
      {isPlaying && (
        <img
          onClick={handlePause}
          style={{
            width: '39px',
            height: '39px',
            position: 'absolute',
            bottom: '8px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            marginBottom: '0px',
            border: 'none',
            cursor: 'pointer',
            zIndex: 1000,
          }}
          src="/assets/PauseCircle.svg"
          alt=""
        />
      )}
    </div>
  );
};

export default PhotoSphereViewer;
