import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { FC, useState } from "react"
import {
  DragPointIcon,
  EyeOffIcon,
  EyeOnIcon,
  MinusIcon,
  Trigger,
  getColor,
} from "@illa-design/react"
import IconHotSpot from "@/components/IconHotSpot"
import { BaseModal } from "@/page/App/components/InspectPanel/PanelSetters/PublicComponent/Modal"
import { ColumnProps } from "./interface"
import { columnContainerStyle, columnLabelStyle, dragIconStyle } from "./style"

export const Column: FC<ColumnProps> = (props) => {
  const {
    id,
    visibility,
    childrenSetter,
    attrPath,
    onDelete,
    showDelete,
    widgetDisplayName,
    label,
    showVisible,
    extraElement,
    onVisibilityChange,
  } = props

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const [triggerVisible, setTriggerVisible] = useState(false)

  return (
    <div
      css={columnContainerStyle}
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <DragPointIcon
        css={dragIconStyle}
        fs="16px"
        c={getColor("grayBlue", "04")}
        {...listeners}
      />

      <Trigger
        withoutPadding
        colorScheme="white"
        trigger="click"
        onVisibleChange={(visible) => {
          setTriggerVisible(visible)
        }}
        popupVisible={triggerVisible}
        content={
          <BaseModal
            title={label as string}
            attrPath={attrPath}
            widgetDisplayName={widgetDisplayName}
            childrenSetter={childrenSetter}
            extraElement={extraElement}
            handleCloseModal={() => {
              setTriggerVisible(false)
            }}
          />
        }
        showArrow={false}
        position="left"
        clickOutsideToClose
      >
        <div css={columnLabelStyle}>{label}</div>
      </Trigger>
      {showVisible && (
        <IconHotSpot
          onClick={() => {
            onVisibilityChange(!visibility)
          }}
        >
          {visibility ? <EyeOnIcon /> : <EyeOffIcon />}
        </IconHotSpot>
      )}
      {showDelete && (
        <IconHotSpot
          onClick={() => {
            onDelete?.(id)
          }}
        >
          <MinusIcon />
        </IconHotSpot>
      )}
    </div>
  )
}

Column.displayName = "Column"