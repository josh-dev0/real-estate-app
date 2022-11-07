import React, { useState } from 'react';
import classNames from 'classnames';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import type { FormProps } from 'antd';
import type { CheckboxChangeEvent } from 'antd/lib/checkbox';
import styles from './styles.module.scss';

const serviceTypeOptions = [
  "Architecture",
  "Construction and Refurbishing",
  "Diagnosis",
  "Energy",
  "Furnitures",
  "Green Spaces and Maintenance",
  "Home Staging",
  "Insurance",
  "Monitoring and Security",
  "Project Financing",
  "Removal",
  "Short Term Let",
  "Support Services",
  "Troubleshooting"
]
  .map(type => ({
    value: type,
    label: type,
  }))

const validateMessages = {
  required: '${label} must not be empty!',
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export type ProfessionalInformationFormProps = Omit<FormProps, 'layout'>

export const ProfessionalInformationForm: React.FC<ProfessionalInformationFormProps> = ({
  className,
  onFinish,
  ...otherProps
}) => {
  const [companyType, setCompanyType] = useState('');
  const [companyTypeValidation, setCompanyTypeValidation] = useState<{
    validateStatus: 'error' | 'success',
    help: string,
  }>({
    validateStatus: 'success',
    help: '',
  });
  const handleOnClickSubmit = () => {
    // validate company type.
    if (!companyType) {
      return setCompanyTypeValidation({
        help: "Please select a company type!",
        validateStatus: "error",
      })
    }
  }
  const checkAndFinish = (values: any) => {
    onFinish!({ ...values, companyType })
  }
  const handleOnCompanyTypeChange = (type: string, checked: boolean) => {
    setCompanyType(checked
      ? type
      : type === 'agency' ? 'other' : 'other'
    );
    return setCompanyTypeValidation({
      help: "",
      validateStatus: "success",
    })
  }

  return (
    <div className={classNames(styles.container, className)}>
      <p className="text-lg leading-2xl text-bg-secondary-dark">
        Tell us more about your company
      </p>
      <ul className="list-disc pl-16 mt-5 text-[11px] leading-base text-bg-secondary-dark">
        <li>So we can match you with potential customers <br /> by type of service they are looking for, proximity, etc...</li>
      </ul>
      <Form
        className="px-10 mt-4 overflow-auto"
        layout="vertical"
        onFinish={checkAndFinish}
        validateMessages={validateMessages}
        {...otherProps}
      >
        <Form.Item
          // label={<span className={styles.labelPrimary}>Brand Name</span>}
          label="Brand Name"
          name='brandName'
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Brand name"
          />
        </Form.Item>
        <Form.Item
          label="Name"
          name='companyName'
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Company name"
          />
        </Form.Item>
        <Form.Item
          label="Company Number"
          name='companyNumber'
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Company number"
          />
        </Form.Item>
        <Form.Item
          className="mt-6"
          label={<span className={classNames(styles.labelPrimary, 'mt-2')}>Type of company</span>}
          {...companyTypeValidation}
        >
          <div className="mt-0">
            <Checkbox
              checked={companyType === 'agency'}
              onChange={(e: CheckboxChangeEvent) => handleOnCompanyTypeChange('agency', e.target.checked)}
            >
              <span className={styles.labelCheckbox}>Real Estate Agency</span>
            </Checkbox>
          </div>
          <div className="mt-1">
            <Checkbox
              checked={companyType === 'other'}
              onChange={(e: CheckboxChangeEvent) => handleOnCompanyTypeChange('other', e.target.checked)}
            >
              <span className={styles.labelCheckbox}>Other</span>
            </Checkbox>
          </div>
        </Form.Item>
        <Form.Item
          className="mt-10"
          label="Type of service you provide"
          name="serviceType"
          rules={[{ required: true }]}
        >
          <Select
            className="w-full mt-2"
            placeholder="Select from the list"
            options={serviceTypeOptions}
          />
        </Form.Item>
        <Form.Item
          className="mt-9"
          label={<span className={styles.labelSecondary}>Description</span>}
          name="description"
        >
          <Input.TextArea
            className="mt-2 placeholder:text-xs placeholder:leading-sm px-3 py-3"
            placeholder="Please introduce yourself the best you can. That’s your chance to promote your services."
          />
        </Form.Item>

        <Button
          className={styles.button}
          type="primary"
          htmlType="submit"
          block
          onClick={handleOnClickSubmit}
        >
          next
        </Button>
      </Form>
    </div>
  );
}