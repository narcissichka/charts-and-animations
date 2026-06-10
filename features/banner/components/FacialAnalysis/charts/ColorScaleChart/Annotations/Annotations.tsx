import { AnnotationsProps } from "../ColorScaleChart.types";
import styles from "../ColorScaleChart.module.scss";
import {
  getValueY,
  getAnnotationLayout,
} from "@/features/banner/utils/charts/colorScale";

export function Annotations({
  annotations,
  min,
  max,
  scaleX,
  scaleY,
  config,
}: AnnotationsProps) {
  return (
    <>
      {annotations.map((annotation) => {
        const y = getValueY({
          value: annotation.value,
          min,
          max,
          scaleY,
          scaleHeight: config.SCALE_HEIGHT,
        });

        const layout = getAnnotationLayout({
          side: annotation.side,
          scaleX,
          scaleWidth: config.SCALE_WIDTH,
          connectorLength: config.ANNOTATION_CONNECTOR_LENGTH,
          labelGap: config.ANNOTATION_LABEL_GAP,
        });

        return (
          <g key={`${annotation.value}-${annotation.side ?? "left"}`}>
            <line
              x1={layout.lineStartX}
              x2={layout.lineEndX}
              y1={y}
              y2={y}
              className={styles.annotationLine}
            />
            <text
              x={layout.textX}
              y={y}
              textAnchor={layout.textAnchor}
              dominantBaseline="central"
              className={styles.annotationText}
            >
              {annotation.label}
            </text>
          </g>
        );
      })}
    </>
  );
}
