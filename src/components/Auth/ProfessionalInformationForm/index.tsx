import React, { useState } from 'react';
import classNames from 'classnames';
import { Button, Checkbox, Form, Input, Select } from 'antd';
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

export type ProfessionalInformationFormProps = {

} & React.HTMLAttributes<HTMLDivElement>

export const ProfessionalInformationForm: React.FC<ProfessionalInformationFormProps> = ({
  className,
}) => {
  const [companyType, setCompanyType] = useState('');

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
      >
        <Form.Item
          label={<span className={styles.labelPrimary}>Name</span>}
          name='companyName'
        >
          <Input
            placeholder="Company name"
          />
        </Form.Item>
        <Form.Item
          className="mt-6"
          label={<span className={classNames(styles.labelPrimary, 'mt-2')}>Type of company</span>}
          name="companyType"
        >
          <div className="mt-3">
            <Checkbox
              checked={companyType === 'agency'}
              onChange={(e: CheckboxChangeEvent) => setCompanyType(e.target.checked ? 'agency' : 'other')}
            >
              <span className={styles.labelCheckbox}>Real Estate Agency</span>
            </Checkbox>
          </div>
          <div className="mt-1">
            <Checkbox
              checked={companyType === 'other'}
              onChange={(e: CheckboxChangeEvent) => setCompanyType(e.target.checked ? 'other' : 'agency')}
            >
              <span className={styles.labelCheckbox}>Other</span>
            </Checkbox>
          </div>
        </Form.Item>
        <Form.Item
          className="mt-10"
          label={<span className={styles.labelSecondary}>Type of service you provide</span>}
          name="serviceType"
        >
          <Select
            className="w-full mt-2"
            defaultValue="Architecture"
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
          block
        >
          next
        </Button>
      </Form>
    </div>
  );
}