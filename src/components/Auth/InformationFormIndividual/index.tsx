import React from 'react';
import classNames from 'classnames';
import { Button, Form, Input, Select } from 'antd';
import styles from './styles.module.scss';

const { Option } = Select;

export type InformationFormIndividualProps = {

} & React.HTMLAttributes<HTMLDivElement>

export const InformationFormIndividual: React.FC<InformationFormIndividualProps> = ({
  className,
}) => {
  return (
    <div className={classNames(styles.container, className)}>
      <p className="text-lg leading-2xl text-bg-secondary-dark">
        Tell us more about your company
      </p>
      <ul className="list-disc pl-16 mt-7 text-[11px] leading-2xl text-bg-secondary-dark">
        <li>So we can match you with potential customers <br /> by type of service they are looking for, proximity, etc...</li>
      </ul>
      <Form
        layout="vertical"
        className="px-10"
      >
        <Form.Item
          className="mt-11"
          label="Name"
          name={['user', 'companyName']}
        // rules={[{ required: true }]}
        >
          <Input
            placeholder="Company name"
          />
        </Form.Item>
        <Form.Item
          label="Type of company"
          name={['user', 'companyType']}
        // rules={[{ required: true }]}
        >
          <Input
            placeholder="Lastname"
          />
        </Form.Item>
        <Form.Item
          label="Type of service you provide"
          name={['user', 'phone']}
        // rules={[{ required: true }]}
        >
          <Select
            className="w-full"
            defaultValue="Architecture"
          >
            <Option value="Architecture">Architecture</Option>
            <Option value="Construction and Refurbishing">Construction and Refurbishing</Option>
            <Option value="Diagnosis">Diagnosis</Option>
            <Option value="Energy">Energy</Option>
            <Option value="Furnitures">Furnitures</Option>
            <Option value="Green Spaces and Maintenance">Green Spaces and Maintenance</Option>
            <Option value="Home Staging">Home Staging</Option>
            <Option value="Insurance">Insurance</Option>
            <Option value="Monitoring and Security">Monitoring and Security</Option>
            <Option value="Project Financing">Project Financing</Option>
            <Option value="Removal">Removal</Option>
            <Option value="Short Term Let">Short Term Let</Option>
            <Option value="Support Services">Support Services</Option>
            <Option value="Troubleshooting">Troubleshooting</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Description"
          name={['user', 'description']}
        // rules={[{ required: true }]}
        >
          <p className="text-[11px] leading-sm text-bg-secondary-dark pl-4 indent-0 -mt-2">
            Please introduce yourself the best you can. That's your chance to promote your services.
          </p>
          <Input
            className="mt-4"
            placeholder="Select from list"
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