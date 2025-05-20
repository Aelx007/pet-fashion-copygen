import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";

export default function PetFashionDemo() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setResult("");

    setTimeout(() => {
      setResult(
        "1. 谁说牛仔只有人能穿？汪星人也要走路带风！\n" +
        "2. 法斗+牛仔=法式复古野性风，今日限定！\n" +
        "3. 给狗狗一个出街回头率爆表的理由！\n" +
        "4. 背带一挂，时尚登场～\n" +
        "5. 铲屎官出街神器，拍照必备！"
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <Card className="mb-4">
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">🐾 宠物穿搭文案生成器</h2>
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="请输入产品信息，如：狗狗牛仔裤，风格搞怪，写5条小红书风格文案"
            className="mb-4"
          />
          <Button onClick={handleGenerate} disabled={loading}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            生成文案
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardContent className="p-4 whitespace-pre-wrap bg-gray-50 rounded-xl">
            <h3 className="font-semibold mb-2">生成结果：</h3>
            {result}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
