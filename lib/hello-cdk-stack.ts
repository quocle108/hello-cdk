import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam'
import { aws_logs as logs } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const cfnLogGroup = new logs.CfnLogGroup(this, 'CfnLogGroup', {
      logGroupName: '/waxnode/'
    });

    const cfnLogStream = new logs.CfnLogStream(this, 'CfnLogStream', {
      logGroupName: cfnLogGroup.logGroupName as string,
      logStreamName: 'logs',
    });      
  }
}
