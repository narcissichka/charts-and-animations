import styles from "./HeroVideo.module.scss";

export const HeroVideo = ({
  className,
  videoSrc,
}: {
  className?: string;
  videoSrc: string;
}) => {
  return (
    <div className={`${styles.hero} ${className ?? ""}`}>
      <div className={styles.filter}></div>

      <div className={styles.background}>
        <video
          className={styles.video}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
};
