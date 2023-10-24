import { GridBaseColDef } from "@mui/x-data-grid/models/colDef/gridColDef"
import { BaseSetter } from "@/page/App/components/InspectPanel/PanelSetters/interface"

export type ColumnType =
  | "auto"
  | "text"
  | "date"
  | "tag"
  | "datetime"
  | "number"
  | "percent"
  | "link"
  | "button"
  | "buttongroup"
  | "boolean"
  | "image"
  | "icongroup"
  | "rating"
  | "markdown"
  | "html"
  | "currency"

export interface ColumnConfig extends GridBaseColDef {
  isCalc?: boolean
  columnType: ColumnType
}

export interface ColumnListSetterProps extends BaseSetter {
  value: ColumnConfig[]
}