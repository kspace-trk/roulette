<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

// リアクティブな状態管理
const rotate = ref(false)
const result = ref(false)
const selectedItem = ref('')
const inputText = ref('')
const rouletteItems = ref<string[]>([])
const canvasRef = ref<HTMLCanvasElement>()
const hasCustomRoulette = ref(false)

// デフォルトのルーレット項目
const defaultItems = ['ぴきちゃん', 'たろう', 'はなこ', 'じろう', 'さくら', 'ひろし']

onMounted(() => {
  // 初期状態でデフォルトのルーレットを描画
  rouletteItems.value = [...defaultItems]
  drawRoulette()
})

// ルーレット項目を追加
const addItem = () => {
  if (inputText.value.trim()) {
    rouletteItems.value.push(inputText.value.trim())
    inputText.value = ''
    hasCustomRoulette.value = true
    drawRoulette()
  }
}

// 項目を削除
const removeItem = (index: number) => {
  rouletteItems.value.splice(index, 1)
  if (rouletteItems.value.length === 0) {
    hasCustomRoulette.value = false
  }
  drawRoulette()
}

// ルーレットをリセット
const resetRoulette = () => {
  rouletteItems.value = [...defaultItems]
  hasCustomRoulette.value = false
  drawRoulette()
}

// Canvasでルーレット盤を描画
const drawRoulette = async () => {
  await nextTick()
  if (!canvasRef.value || rouletteItems.value.length === 0) return

  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const centerX = canvas.width / 2
  const centerY = canvas.height / 2
  const radius = Math.min(centerX, centerY) - 20

  // キャンバスをクリア
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const angleStep = (2 * Math.PI) / rouletteItems.value.length
  // Canvas APIの0°は右を指すが、針は上を指すので-90°から開始
  // さらに針が最初のセクションの中央を指すように、セクションを半分ずらす
  const startOffset = -Math.PI / 2 - angleStep / 2
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#FFB347', '#87CEEB', '#F0E68C', '#FFB6C1'
  ]

  // セクションを描画
  rouletteItems.value.forEach((item, index) => {
    const startAngle = index * angleStep + startOffset
    const endAngle = (index + 1) * angleStep + startOffset

    // セクションの背景
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, radius, startAngle, endAngle)
    ctx.closePath()
    ctx.fillStyle = colors[index % colors.length]
    ctx.fill()
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 3
    ctx.stroke()

    // テキストを描画
    ctx.save()
    ctx.translate(centerX, centerY)
    // セクションの中央角度を計算（オフセットを考慮）
    const sectionCenterAngle = startAngle + angleStep / 2
    ctx.rotate(sectionCenterAngle)
    ctx.textAlign = 'center'
    ctx.fillStyle = '#333'
    ctx.font = 'bold 16px Arial'
    
    // テキストの長さに応じてフォントサイズを調整
    const textWidth = ctx.measureText(item).width
    if (textWidth > radius * 0.8) {
      ctx.font = 'bold 12px Arial'
    }
    
    ctx.fillText(item, radius * 0.6, 5)
    ctx.restore()
  })

  // 中央の円
  ctx.beginPath()
  ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI)
  ctx.fillStyle = '#333'
  ctx.fill()
}

// ルーレット開始
const start = () => {
  if (rouletteItems.value.length === 0) return
  
  rotate.value = true
  result.value = false
  
  // 針が指している項目（最初の項目）を選択
  selectedItem.value = rouletteItems.value[0]
  
  setTimeout(stop, 2000)
}

const stop = () => {
  rotate.value = false
  result.value = true
}

// Enterキーで項目追加
const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    addItem()
  }
}
</script>

<template>
  <div class="container">
    <div class="title">動的ルーレットアプリ</div>
    
    <!-- 項目入力フォーム -->
    <div class="input-section">
      <div class="input-group">
        <input 
          v-model="inputText" 
          @keypress="handleKeyPress"
          type="text" 
          placeholder="ルーレット項目を入力..."
          class="item-input"
        >
        <button @click="addItem" class="add-btn">追加</button>
      </div>
      
      <!-- 現在の項目リスト -->
      <div class="items-list" v-if="rouletteItems.length > 0">
        <h3>現在の項目:</h3>
        <div class="items-grid">
          <div 
            v-for="(item, index) in rouletteItems" 
            :key="index"
            class="item-tag"
          >
            <span>{{ item }}</span>
            <button @click="removeItem(index)" class="remove-btn">×</button>
          </div>
        </div>
        <button @click="resetRoulette" class="reset-btn">デフォルトに戻す</button>
      </div>
    </div>

    <!-- ルーレット -->
    <div class="circle">
      <div class="point">
        <svg xmlns="http://www.w3.org/2000/svg" width="65.142" height="66.835" viewBox="0 0 65.142 66.835">
          <path id="Icon_awesome-arrow-down" data-name="Icon awesome-arrow-down" d="M61.176,30.667l3.312,3.312a3.565,3.565,0,0,1,0,5.057l-28.983,29a3.565,3.565,0,0,1-5.057,0l-29-29a3.565,3.565,0,0,1,0-5.057L4.76,30.667a3.584,3.584,0,0,1,5.116.06L27,48.7V5.83a3.571,3.571,0,0,1,3.58-3.58h4.773a3.571,3.571,0,0,1,3.58,3.58V48.7L56.06,30.726a3.558,3.558,0,0,1,5.116-.06Z" transform="translate(-0.397 -2.25)"/>
        </svg>
      </div>
      <canvas 
        ref="canvasRef"
        :class="{rotate: rotate}" 
        width="600" 
        height="600"
        class="roulette-canvas"
      ></canvas>
    </div>

    <!-- 結果表示 -->
    <div class="result" v-if="result">
      🎉🎉🎉 {{ selectedItem }} 🎉🎉🎉
    </div>

    <!-- スタートボタン -->
    <button 
      @click="start()" 
      :disabled="rouletteItems.length === 0"
      class="start-btn"
    >
      ルーレットスタート！！！！
    </button>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  gap: 30px;
}

.title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.input-section {
  width: 100%;
  max-width: 600px;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.item-input {
  flex: 1;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.item-input:focus {
  outline: none;
  border-color: #4ECDC4;
}

.add-btn {
  padding: 12px 20px;
  background: #4ECDC4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.add-btn:hover {
  background: #45B7D1;
}

.items-list h3 {
  margin: 0 0 15px 0;
  color: #333;
}

.items-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}

.item-tag {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #e9ecef;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
}

.remove-btn {
  background: #ff4757;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.reset-btn {
  background: #6c757d;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.circle {
  display: flex;
  justify-content: center;
  position: relative;
}

.point {
  position: absolute;
  top: -40px;
  z-index: 10;
}

.point svg {
  width: 30px;
}

path {
  fill: red;
}

.roulette-canvas {
  max-width: 600px;
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.start-btn {
  padding: 15px 30px;
  background: #FF6B6B;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.start-btn:hover:not(:disabled) {
  background: #ff5252;
  transform: scale(1.05);
}

.start-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
}

.rotate {
  animation: 3s linear infinite rotation;
}

@keyframes rotation {
  0% { transform: rotateY(0); }
  100% { transform: rotateY(3600deg); }
}

.result {
  font-size: 3rem;
  color: #FF6B6B;
  text-align: center;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
  
  .roulette-canvas {
    max-width: 300px;
  }
  
  .result {
    font-size: 2rem;
  }
  
  .input-section {
    padding: 15px;
  }
}
</style>
