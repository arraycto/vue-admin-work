<template>
  <div class="base-form-container">
    <el-form
      ref="form"
      label-position="right"
      label-width="80px"
      size="small"
    >
      <el-form-item
        v-for="(item, i) of formItems"
        :key="i"
        :label="item.label"
      >
        <el-col :span="22">
          <el-input
            v-if="item.type === 'input'"
            v-model="item.value"
            :placeholder="item.placeholder || '请输入内容'"
            size="small"
            clearable
            class="form-item"
          />
          <el-select
            v-else-if="item.type === 'select'"
            v-model="item.value"
            :placeholder="item.placeholder || '请选择条目'"
            size="small"
            :filterable="item.filterable ? true : false"
            clearable
            style="width: 100%"
            class="form-item"
            @change="item.onChange(item.value, item.associatedOption || '') || (() => {})"
          >
            <el-option
              v-for="optionItem in item.selectOptions"
              :key="optionItem.value"
              :value="optionItem.value"
              :label="optionItem.label"
            />
          </el-select>
          <el-date-picker
            v-else-if="item.type === 'date-range'"
            v-model="item.value"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            class="form-item"
            size="small"
          />
          <el-date-picker
            v-else-if="item.type === 'date'"
            v-model="item.value"
            type="date"
            range-separator="-"
            :placeholder="item.placeholder || '请选择日期'"
            class="form-item"
            size="small"
          />
          <el-date-picker
            v-else-if="item.type === 'datetime'"
            v-model="item.value"
            type="datetime"
            :placeholder="item.placeholder || '请选择日期'"
            class="form-item"
            size="small"
          />
          <el-time-picker
            v-else-if="item.type === 'time'"
            v-model="item.value"
            arrow-control
            :picker-options="{
              selectableRange: '00:00:00 - 23:59:59'
            }"
            :placeholder="item.placeholder || '请选择时间'"
            class="form-item"
            size="small"
          />
          <el-radio-group
            v-if="item.type === 'radio-group'"
            v-model="item.value"
          >
            <component
              :is="item.style === 'button' ? 'el-radio-button' : 'el-radio'"
              v-for="optionItem of item.radioOptions"
              :key="optionItem.value"
              :label="optionItem.value"
            >{{ optionItem.label }}</component>
          </el-radio-group>
          <el-checkbox-group
            v-if="item.type === 'check-group'"
            v-model="item.value"
          >
            <component
              :is="item.style === 'button' ? 'el-checkbox-button' : 'el-checkbox'"
              v-for="optionItem of item.checkOptions"
              :key="optionItem.value"
              :label="optionItem.value"
            >{{ optionItem.label }}</component>
          </el-checkbox-group>
        </el-col>
      </el-form-item>
      <slot name="extra"></slot>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'BaseForm',
  props: {
    formItems: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
