import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const documentRouter = createTRPCRouter({
  createDoc: publicProcedure
    .input(z.object({
      documentName: z.string(),
      documentContent: z.string()
    }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.documents.create({
        data: {
          document_name: input.documentName,
          document_content: input.documentContent
        }
      })
    }),

  viewDocs: publicProcedure
   .query(({ ctx }) => {
    return ctx.prisma.documents.findMany({
      orderBy: {
        created_At: "desc"
      }
    });
   }),

   viewSingleDoc: publicProcedure
    .input(z.object({
      docName: z.string()
    }))
    .query(({ ctx, input }) => {
      return ctx.prisma.documents.findFirst({
        where: {
          document_name: input.docName
        }
      })
    }),

    updateDoc: publicProcedure
      .input(z.object({
        docName: z.string(),
        docContent: z.string()
      }))
      .mutation(({ ctx, input }) => {
        return ctx.prisma.documents.update({
          where: {
            document_name: input.docName
          },
          data: {
            document_content: input.docContent
          }
        })
      }),

    deleteDoc: publicProcedure
      .input(z.object({
        id: z.number()
      }))
      .mutation(({ ctx, input }) => {
        return ctx.prisma.documents.delete({
          where: {
            id: input.id
          }
        });
      })
});