"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cart_entity_1 = require("../entities/cart.entity");
let CartsService = class CartsService {
    constructor(cartsRepository) {
        this.cartsRepository = cartsRepository;
    }
    async create(cart) {
        return this.cartsRepository.save(cart);
    }
    async findAll() {
        return this.cartsRepository.find();
    }
    async findOne(id) {
        const cart = await this.cartsRepository.findOne({ where: { id } });
        return cart || undefined;
    }
    // save method in CartsService
    async update(id, cart) {
        await this.findOne(id); // Ensure cart exists
        return this.cartsRepository.save(Object.assign(Object.assign({}, cart), { id }));
    }
    async remove(id) {
        await this.cartsRepository.delete(id);
    }
};
exports.CartsService = CartsService;
exports.CartsService = CartsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_entity_1.Cart)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CartsService);
