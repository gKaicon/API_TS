import { FastifyRequest, FastifyReply } from 'fastify';
import { ListCustomerService } from "../services/ListCustomerService";

class ListCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        
        const listcustomerService = new ListCustomerService()
        const customer = await listcustomerService.execute();
        reply.send(customer)
    }
}
export {ListCustomerController}