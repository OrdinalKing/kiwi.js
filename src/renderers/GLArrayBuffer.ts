

module Kiwi.Renderers {

   
    export class GLArrayBuffer {

        constructor(gl: WebGLRenderingContext, _itemSize?: number, items?: number[], init: boolean = true) {

            this.items = items || GLArrayBuffer.squareVertices;
            this.itemSize = _itemSize || 2;
            this.numItems = this.items.length / this.itemSize;
            if (init) {
                this.buffer = this.init(gl);
            }
        }

        public items: number[];
        public buffer: WebGLBuffer;
        public itemSize: number;
        public numItems: number;

        public flush() {
            this.items = new Array();
        }

        public init(gl: WebGLRenderingContext): WebGLBuffer {
            var buffer: WebGLBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.items), gl.DYNAMIC_DRAW);

            return buffer;
        }

        public refresh(gl: WebGLRenderingContext, items: number[]): WebGLBuffer {

            this.items = items;
            this.numItems = this.items.length / this.itemSize;
            gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.items), gl.DYNAMIC_DRAW);
            return this.buffer;
        }

        public static squareVertices: number[] = [
            0, 0,
            100, 0,
            100, 100,
            0, 100
        ];

        public static squareUVs: number[] = [
            0, 0,
            .1, 0,
            .1, .1,
            0, .1
        ];

        public static squareCols: number[] = [
            1, 1, 1, 1

        ]

    }

}
