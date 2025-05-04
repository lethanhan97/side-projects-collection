import { Button, Form, Radio, Typography } from "antd";
import type { Route } from "./+types/builder";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Financial Personality Quiz" },
    { name: "description", content: "Financial Personality Quiz" },
  ];
}

export default function FormBuilderPage() {
  const [form] = Form.useForm();
  const [result, setResult] = useState<string | null>(null);

  const calculateResult = (values: Record<string, string>) => {
    const totalPoints = Object.values(values).reduce(
      (sum, value) => sum + parseInt(value),
      0
    );

    if (totalPoints >= 5 && totalPoints <= 9) {
      setResult("Spender");
    } else if (totalPoints >= 10 && totalPoints <= 14) {
      setResult("Balancer");
    } else if (totalPoints >= 15 && totalPoints <= 19) {
      setResult("Saver");
    } else if (totalPoints >= 20) {
      setResult("Investor");
    }
  };

  const onFinish = (values: Record<string, string>) => {
    calculateResult(values);
  };

  return (
    <div className="p-8">
      <Typography.Title level={1}>Financial Personality Quiz</Typography.Title>

      {result && (
        <div className="max-w-2xl mx-auto text-center">
          <Typography.Title level={2}>
            Your Financial Personality Type
          </Typography.Title>
          <Typography.Title level={3} className="text-blue-600">
            {result}
          </Typography.Title>
          <Typography.Paragraph className="text-lg mt-4">
            {result === "Spender" &&
              "You enjoy spending money and living in the moment. Consider setting up automatic savings to balance your spending habits."}
            {result === "Balancer" &&
              "You have a good balance between spending and saving. Keep up the good work and consider increasing your investment contributions."}
            {result === "Saver" &&
              "You're great at saving money! Consider exploring investment opportunities to grow your wealth."}
            {result === "Investor" &&
              "You're focused on long-term financial growth. Keep up the good work and consider mentoring others about financial literacy."}
          </Typography.Paragraph>

          <Button
            type="primary"
            onClick={() => setResult(null)}
            className="mt-6"
          >
            Take Quiz Again
          </Button>

          <Button
            type="primary"
            onClick={() => {
              alert("go to app store");
            }}
            className="mx-3"
          >
            Download our app to better manage your money
          </Button>
        </div>
      )}

      <div className="max-w-2xl mx-auto">
        <Form
          layout="vertical"
          className="space-y-6"
          onFinish={onFinish}
          form={form}
        >
          {!result && (
            <>
              <Typography.Paragraph className="text-lg mb-6">
                Take this quiz to discover your financial personality type and
                get personalized insights about your money habits.
              </Typography.Paragraph>
              <Form.Item
                label="1. When you receive money as a gift, you are most likely to..."
                name="q1"
                rules={[{ required: true, message: "Please select an answer" }]}
              >
                <Radio.Group>
                  <Radio value="1">
                    Spend it right away on something you want
                  </Radio>
                  <br />
                  <Radio value="4">Save it for something you need</Radio>
                  <br />
                  <Radio value="5">
                    Invest it or donate it to a good cause
                  </Radio>
                  <br />
                  <Radio value="2">
                    Split it between spending, saving, investing, and donating
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="2. When you are shopping, you are most likely to..."
                name="q2"
                rules={[{ required: true, message: "Please select an answer" }]}
              >
                <Radio.Group>
                  <Radio value="1">
                    Buy whatever catches your eye, regardless of the price or
                    quality
                  </Radio>
                  <Radio value="4">
                    Compare prices and quality, and look for discounts and deals
                  </Radio>
                  <Radio value="5">
                    Avoid shopping unless it is absolutely necessary, and buy
                    only the essentials
                  </Radio>
                  <Radio value="2">
                    Have a budget and a shopping list, and stick to them
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="3. When you have a financial goal, you are most likely to..."
                name="q3"
                rules={[{ required: true, message: "Please select an answer" }]}
              >
                <Radio.Group>
                  <Radio value="1">
                    Forget about it or give up on it if it takes too long or
                    requires too much effort
                  </Radio>
                  <Radio value="4">
                    Work hard and save diligently, even if it means sacrificing
                    other things
                  </Radio>
                  <Radio value="5">
                    Seek advice and guidance from experts or mentors, and follow
                    their recommendations
                  </Radio>
                  <Radio value="2">
                    Plan and track your progress, and reward yourself for
                    reaching milestones
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="4. When you face a financial challenge, you are most likely to..."
                name="q4"
                rules={[{ required: true, message: "Please select an answer" }]}
              >
                <Radio.Group>
                  <Radio value="1">
                    Ignore it or hope it goes away, and continue spending as
                    usual
                  </Radio>
                  <Radio value="4">
                    Cut back on your expenses and look for ways to increase your
                    income
                  </Radio>
                  <Radio value="5">
                    Ask for help from your family, friends, or professionals,
                    and accept their support
                  </Radio>
                  <Radio value="2">
                    Analyze the situation and come up with a realistic and
                    flexible solution
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="5. When you think about your financial future, you are most likely to..."
                name="q5"
                rules={[{ required: true, message: "Please select an answer" }]}
              >
                <Radio.Group>
                  <Radio value="1">
                    Live in the moment and not worry about tomorrow
                  </Radio>
                  <Radio value="4">
                    Have a clear vision and a detailed plan for achieving your
                    goals
                  </Radio>
                  <Radio value="5">
                    Be optimistic and confident that things will work out for
                    the best
                  </Radio>
                  <Radio value="2">
                    Be cautious and prepared for any possible risks or
                    opportunities
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="w-full"
                >
                  Submit Quiz
                </Button>
              </Form.Item>
            </>
          )}
        </Form>
      </div>
    </div>
  );
}
