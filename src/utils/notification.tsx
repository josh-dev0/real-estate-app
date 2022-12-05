import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import { notification as antdNotification } from 'antd';
import type { ArgsProps } from 'antd/lib/notification';
import type { PartialBy } from '@app/types/general';

type NotificationArgs = PartialBy<ArgsProps, 'message'>

const customConfiguration = {
  className: 'custom-notification',
};

export const notification = {
  error: ({ message, ...otherArgs }: NotificationArgs) => {
    antdNotification.open({
      ...customConfiguration,
      icon: <CloseCircleFilled className="text-sm text-error" />,
      message: message || "",
      ...otherArgs
    })
  },
  success: ({ message, ...otherArgs }: NotificationArgs) => {
    antdNotification.open({
      ...customConfiguration,
      icon: <CheckCircleFilled className="text-sm text-success" />,
      message: message || '',
      ...otherArgs
    })
  },
};



